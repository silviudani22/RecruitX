using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RecruitXBackend.Models.Domain;
using RecruitXBackend.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using RecruitXBackend.Data;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly RecruitXContext context;

    [HttpPost("signup")]
    public IActionResult SignUp(UserDto userDto)
    {
        // Verifică dacă utilizatorul există deja
        var existingUser = context.Users.FirstOrDefault(u => u.email == userDto.email || u.username == userDto.username);
        if (existingUser != null)
        {
            return BadRequest("User already exists");
        }

        var user = new Users
        {
            username = userDto.username,
            email = userDto.email,
            password = userDto.password, 
            lastName = userDto.lastName,
            firstName = userDto.firstName
        };

        context.Users.Add(user);
        context.SaveChanges();

        return Ok(new { message = "User registered successfully" });
    }

    [HttpPost("login")]
    public IActionResult Login(LoginDto loginDto)
    {
        var user = context.Users.FirstOrDefault(u => u.email == loginDto.email && u.password == loginDto.password);
        if (user == null)
        {
            return Unauthorized("Invalid email or password");
        }

        // În producție, aici ai genera un token JWT
        return Ok(new { message = "Login successful", user });
    }


    public UsersController(RecruitXContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public IActionResult GetUsers()
    {
        var users = context.Users.OrderByDescending(u => u.id).ToList();
        return Ok(users);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetUser(string id) // Schimbat din int în string
    {
        var user = context.Users.Find(id);
        if (user == null) return NotFound();

        return Ok(user);
    }

    [HttpPost]
    public IActionResult CreateUser(UserDto userDto)
    {
        var user = new Users
        {
            username = userDto.username,
            email = userDto.email,
            password = userDto.password,
            lastName = userDto.lastName,
            firstName = userDto.firstName
        };
        context.Users.Add(user);
        context.SaveChanges();

        return Ok(user);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(string id)
    {
        var user = context.Users.Find(id);
        if (user == null) return NotFound();

       context.Users.Remove(user);
        context.SaveChanges();

        return Ok();
    }
}