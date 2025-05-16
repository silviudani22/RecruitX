using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecruitXBackend.Data;
using RecruitXBackend.Models;
using RecruitXBackend.Models.Domain;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[Route("api/jobs")]
[ApiController]
public class ListedJobsController : ControllerBase
{
    private readonly RecruitXContext _context;

    public ListedJobsController(RecruitXContext context)
    {
        _context = context;
    }


    // GET: api/ListedJobs/5
    [HttpGet("{id}")]
    public async Task<ActionResult<ListedJob>> GetListedJob(int id)
    {
        var listedJob = await _context.ListedJobs.FindAsync(id);

        if (listedJob == null)
        {
            return NotFound();
        }

        return listedJob;
    }

    // POST: api/jobs - Pentru modal
    [HttpPost]
    public async Task<ActionResult<ListedJob>> PostListedJob([FromBody] ListedJob job)
    {
        if (!ModelState.IsValid)
        {
            // Asta va returna detalii despre ce nu e valid în payload!
            return BadRequest(ModelState);
        }

        _context.ListedJobs.Add(job);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetListedJob), new { id = job.id }, job);
    }

    // POST: api/ListedJobs
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ListedJobDto>>> GetListedJobs()
    {
        var jobs = await _context.ListedJobs
            .Include(j => j.Company)
            .Select(j => new ListedJobDto
            {
                id = j.id,
                companyName = j.companyName,
                technology = j.technology,
                experienceNeeded = j.experienceNeeded,
                flexibility = j.flexibility,
                program = j.program,
                Companyid = j.Companyid
            })
            .ToListAsync();

        return Ok(jobs);
    }

    //// PUT: api/ListedJobs/5
    //[HttpPut("{id}")]
    //public async Task<IActionResult> PutListedJob(int id, ListedJob listedJob)
    //{
    //    if (id != listedJob.id)
    //    {
    //        return BadRequest("ID mismatch");
    //    }

    //    _context.Entry(listedJob).State = EntityState.Modified;

    //    try
    //    {
    //        await _context.SaveChangesAsync();
    //    }
    //    catch (DbUpdateConcurrencyException)
    //    {
    //        if (!ListedJobExists(id))
    //        {
    //            return NotFound();
    //        }
    //        else
    //        {
    //            throw;
    //        }
    //    }

    //    return NoContent();
    //}

    // DELETE: api/ListedJobs/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteListedJob(int id)
    {
        var listedJob = await _context.ListedJobs.FindAsync(id);
        if (listedJob == null)
        {
            return NotFound();
        }

        _context.ListedJobs.Remove(listedJob);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ListedJobExists(int id)
    {
        return _context.ListedJobs.Any(e => e.id == id);
    }
}