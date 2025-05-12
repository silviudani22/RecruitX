using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecruitXBackend.Data;
using RecruitXBackend.Models.Domain;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class ListedJobsController : ControllerBase
{
    private readonly RecruitXContext _context;

    public ListedJobsController(RecruitXContext context)
    {
        _context = context;
    }

    // GET: api/ListedJobs
    [HttpGet]
    public IActionResult GetListedJobs()
    {
        var jobs = _context.ListedJobs.OrderByDescending(u => u.id).ToList();
        return Ok(jobs);
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

    // POST: api/ListedJobs
    [HttpPost]
    public async Task<ActionResult<ListedJob>> PostListedJob(ListedJob listedJob)
    {
        // Validare de bază
        if (string.IsNullOrWhiteSpace(listedJob.companyName))
        {
            return BadRequest("Company name is required");
        }

        if (string.IsNullOrWhiteSpace(listedJob.Companyid))
        {
            return BadRequest("Company ID is required");
        }

        _context.ListedJobs.Add(listedJob);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetListedJob), new { id = listedJob.id }, listedJob);
    }

    // PUT: api/ListedJobs/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutListedJob(int id, ListedJob listedJob)
    {
        if (id != listedJob.id)
        {
            return BadRequest("ID mismatch");
        }

        _context.Entry(listedJob).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ListedJobExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

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