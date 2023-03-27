using ProjectManager.Models;

namespace ProjectManager.Controllers.Requests
{
    public class RegisterProjectRequest
    {
        public string? Title { get; set; }
        public string? CreatedBy { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime? DueDate { get; set; }
        public List<Member>? Member { get; set; }
    }
}
