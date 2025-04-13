using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RecruitXBackend.Data;
using RecruitXBackend.Models;
using RecruitXBackend.Models.Domain;

namespace RecruitXBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly RecruitXContext context;
        public UsersController(RecruitXContext context)
        {
            this.context = context;
        }


        [HttpGet]
        public IActionResult GetUsers()
        {
            var users = context.Users.OrderByDescending(e => e.id).ToList();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var usr = context.Users.Find(id);
            if(usr == null)
            {
                return NotFound();
            }
            return Ok(usr);
        }

        [HttpPost]
        public IActionResult CreateUser(UserDto userDto)
        {
            var usr = new Users
            {
                username = userDto.username,
                email = userDto.email,
                password = userDto.password,
                role = userDto.role,
                lastName = userDto.lastName,
                firstName = userDto.firstName,
            };
            context.Users.Add(usr);
            context.SaveChanges();

            return Ok(usr);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var usr = context.Users.Find(id);
            if(usr == null)
            {
                return NotFound();
            }
            context.Users.Remove(usr);
            context.SaveChanges();

            return Ok();
        }
    }
}
