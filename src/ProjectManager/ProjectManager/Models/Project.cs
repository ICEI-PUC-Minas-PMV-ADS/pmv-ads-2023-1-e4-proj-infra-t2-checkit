using ProjectManager.Controllers.Requests;
using System.ComponentModel.DataAnnotations;

namespace ProjectManager.Models
{
    public class Project
    {
        public Project(RegisterOrUpdateProjectRequest request)
        {
            Id = Guid.NewGuid();
            Title = request.Title!;
            CreatedAt = DateTime.Now;
            CreatedBy = request.CreatedBy!;
            UpdatedAt = DateTime.Now;
            UpdatedBy = request.UpdatedBy!;
            DueDate = request.DueDate!.Value;
            Members = request.Member!;
        }

        public Project(Guid id, string title, DateTime createdAt, string createdBy, DateTime updatedAt, string updatedBy, DateTime dueDate, List<Member> members)
        {
            Id = id;
            Title = title;
            CreatedAt = createdAt;
            CreatedBy = createdBy;
            UpdatedAt = updatedAt;
            UpdatedBy = updatedBy;
            DueDate = dueDate;
            Members = members;
        }

        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Title { get; set; }
        public DateTime CreatedAt { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedAt { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime DueDate { get; set; }
        public List<Member> Members { get; set; }
    }
}