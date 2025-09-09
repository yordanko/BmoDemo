using System.Collections.Concurrent;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace src.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RiskJobController : ControllerBase
    {
        private static readonly ConcurrentBag<string> _riskData = new();

        [HttpPost("/run-risk-job")]
        public IActionResult RunRiskJob()
        {
            // Simulate pulling borrower risk data
            var simulatedData = $"Borrower_Risk_Job-{DateTime.UtcNow:yyyyMMddHHmmss}";
            _riskData.Add(simulatedData);

            return Ok(new { message = "Risk job run successfully", data = simulatedData });
        }

        [HttpGet("/risk-data")]
        public IActionResult GetRiskData()
        {
            return Ok(_riskData);
        }
    }
}
