using ProjectManager.Models;

namespace ProjectManager.Services.Projects
{
    public interface IProjectService
    {
        Task Register(Project project); 
    }
}
