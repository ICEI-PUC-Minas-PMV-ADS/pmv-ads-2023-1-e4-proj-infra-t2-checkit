﻿using Microsoft.AspNetCore.Mvc;
using ProjectManager.Controllers.Requests;
using ProjectManager.Models;
using ProjectManager.Services.Projects;
using System.Net;

namespace ProjectManager.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectService _projectService;

        public ProjectsController(IProjectService projectService)
        {
            _projectService = projectService;
        }


        [HttpGet("GetAllProjectsThisUser/{userId}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.Forbidden)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        public async Task<List<Project>> GetAll(string userId)
        {
            return await _projectService.GetAllAsync(userId);
        }


        [HttpGet("{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.Forbidden)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        public async Task<IActionResult> Get([FromRoute] string id)
        {
            var project = await _projectService.Get(id);
            //    GerarLinks(project);

            return Ok(project);
        }

        [HttpPost()]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Conflict)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        public async Task<IActionResult> Register([FromBody] RegisterOrUpdateProjectRequest request)
        {
            var input = new Project(request);
            
            await _projectService.Register(input);

            return CreatedAtAction("Get", new { id = input.Id }, input);
        }


        [HttpPut("{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        public async Task<IActionResult> Update([FromRoute] string id, [FromBody] RegisterOrUpdateProjectRequest request)
        {
            var input = new Project(request, id);
            // var project = await _projectService.Get(id);

            //  GerarLinks(project);
            await _projectService.Update(id, input);
            return Ok();

        }

        [HttpDelete("{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        public async Task<IActionResult> Delete([FromRoute] string id)
        {
            //  var project = await _projectService.Get(id);
            //  GerarLinks(project);

            await _projectService.Delete(id);
                
            return Ok();
        }


        [HttpGet("GetTaskFromProject/{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        public async Task<IActionResult> GetTaskFromProject(string id)
        {
            var project = await _projectService.Get(id);          
            
            return Ok(project.TarefaId);
        }

        //private void GerarLinks(Project model) {

        //      if (model != null) {
        //          model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
        //          model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "PUT"));
        //          model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "DELETE"));

        //      }

        //  }
    }
}
