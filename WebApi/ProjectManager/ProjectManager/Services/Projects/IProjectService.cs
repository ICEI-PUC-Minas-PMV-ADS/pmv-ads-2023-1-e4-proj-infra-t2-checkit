using ProjectManager.Models;

namespace ProjectManager.Services.Projects
{
    public interface IProjectService
    {
        Task Register(Project project);
        Task<Project> Get(string id);
        Task Update(string id, Project project);
        Task Delete(string id);
        Task<List<Project>> GetAllAsync(string userId);
    }
}
