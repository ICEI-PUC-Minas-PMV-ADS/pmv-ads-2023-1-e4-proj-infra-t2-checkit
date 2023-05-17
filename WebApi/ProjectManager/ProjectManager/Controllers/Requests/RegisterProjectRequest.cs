using ProjectManager.Models;

namespace ProjectManager.Controllers.Requests
{
    public class RegisterOrUpdateProjectRequest
    {
        public string? Title { get; set; }
        public string? CreatedBy { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime? DueDate { get; set; }
        public List<Member>? Member { get; set; }
        public string? Status { get; set; }
        public List<string?> TarefaId { get; set; }
    }
}
