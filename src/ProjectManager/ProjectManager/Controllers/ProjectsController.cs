using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ProjectManager.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {

        [HttpPost]
        public async Task<IActionResult> Register()
        {
            throw new NotImplementedException();
        }
    }
}
