using ProjectManager.Models;

namespace ProjectManager.Services.Projects
{
    public interface IProjectService
    {
        Task Register(Project project);
        Task<Project> Get(Guid id);
        Task Update(Guid id, Project project);
        Task Delete(Guid id);
    }
}
