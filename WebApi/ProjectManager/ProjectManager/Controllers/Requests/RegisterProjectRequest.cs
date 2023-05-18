using ProjectManager.Models;

namespace ProjectManager.Controllers.Requests
{
    public class RegisterOrUpdateProjectRequest
    {
        public string? Title { get; set; }        
        public DateTime? DueDate { get; set; }        
        public string? Status { get; set; }
        public List<string?> TarefaId { get; set; }
        public string UserId { get; set; }
    }
}
