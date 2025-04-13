using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RecruitXBackend.Data;
using RecruitXBackend.Models;
using RecruitXBackend.Models.Domain;

namespace RecruitXBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListedJobController : ControllerBase
    {
        private readonly RecruitXContext context;

        public ListedJobController(RecruitXContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult GetListedJobs()
        {
            var jobs = context.ListedJobs.OrderByDescending(e => e.id).ToList();
            return Ok(jobs);
        }

        [HttpGet("{id}")]
        public IActionResult GetListedJob(int id)
        {
            var job = context.ListedJobs.Find(id);
                if(job == null)
            { return NotFound(); }
            return Ok(job);
        }

        [HttpPost]
        public IActionResult CreateJob(ListedJobDto listedJobDto)
        {
            var job = new ListedJob
            {
                companyName = listedJobDto.companyName,
                technology = listedJobDto.technology,
                experienceNedeed = listedJobDto.experienceNedeed,
                flexibility = listedJobDto.flexibility,
                program = listedJobDto.program,
                idCompany = listedJobDto.idCompany,
            };
            context.ListedJobs.Add(job);
            context.SaveChanges();

            return Ok(job);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteListedJob(int id)
        {
            var job = context.ListedJobs.Find(id);
            if(job == null)
            {
                return NotFound();
            }
            context.ListedJobs.Remove(job);
            context.SaveChanges();

            return Ok();
        }
    }
}
