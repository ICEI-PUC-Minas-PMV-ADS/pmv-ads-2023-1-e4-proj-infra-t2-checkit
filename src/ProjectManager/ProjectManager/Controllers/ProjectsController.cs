using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectManager.Controllers.Requests;
using ProjectManager.Models;
using ProjectManager.Services.Projects;

namespace ProjectManager.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectService _projectService;

        public ProjectsController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody]RegisterProjectRequest request)
        {
            var input = new Project(request);

            _projectService.Register(input);

            return Ok();
        }
    }
}
