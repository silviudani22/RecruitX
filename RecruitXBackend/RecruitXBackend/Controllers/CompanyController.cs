using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RecruitXBackend.Data;
using RecruitXBackend.Models.Domain;

namespace RecruitXBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly RecruitXContext context;

        public CompanyController(RecruitXContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult GetCompanies()
        {
            var companies = context.Companies.OrderByDescending(e => e.id).ToList();
            return Ok(companies);
        }

        [HttpGet("{id}")]
        public IActionResult GetCompany(int id)
        {
            var com = context.Companies.Find(id);
            if (com == null)
            {
                return NotFound();
            }
            return Ok(com);
        }

        [HttpPost]
        public IActionResult CreateCompany(CompanyDto companyDto)
        {
            var com = new Company
            {
                name = companyDto.name,
                domain = companyDto.domain,
                location = companyDto.location,
            };
            context.Companies.Add(com);
            context.SaveChanges();

            return Ok(com);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCompany(int id)
        {
            var com = context.Companies.Find(id);
            if (com == null)
            {
                return NotFound();
            }
            context.Companies.Remove(com);
            context.SaveChanges();

            return Ok();
        }
    }
}
