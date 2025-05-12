using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RecruitXBackend.Data;
using RecruitXBackend.Models.Domain;
using RecruitXBackend.Models;
using Microsoft.Identity.Client;

namespace RecruitXBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobApplicationController : ControllerBase
    {
        private readonly RecruitXContext context;
        public JobApplicationController(RecruitXContext context)
        {
            this.context = context;
        }


        [HttpGet]
        public IActionResult GetApplications()
        {
            var appls = context.JobApplications.OrderByDescending(e => e.id).ToList();
            return Ok(appls);
        }

        [HttpGet("{id}")]
        public IActionResult GetApplication(int id)
        {
            var appl = context.JobApplications.Find(id);
            if (appl == null)
            {
                return NotFound();
            }
            return Ok(appl);
        }

        [HttpPost]
        public IActionResult CreateApplication(JobApplicationDto jobApplicationDto)
        {
            var appl = new JobApplication
            {
                userId = jobApplicationDto.userId,
                jobId = jobApplicationDto.jobId,
                applicationDate = jobApplicationDto.applicationDate,
            };
            context.JobApplications.Add(appl);
            context.SaveChanges();

            return Ok(appl);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteApplication(int id)
        {
            var appl = context.JobApplications.Find(id);
            if (appl == null)
            {
                return NotFound();
            }
            context.JobApplications.Remove(appl);
            context.SaveChanges();

            return Ok();
        }
    }
}
