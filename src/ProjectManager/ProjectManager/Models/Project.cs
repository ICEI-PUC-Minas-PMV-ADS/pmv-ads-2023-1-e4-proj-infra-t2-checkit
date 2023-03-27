using System.ComponentModel.DataAnnotations;

namespace ProjectManager.Models
{
    public class Project
    {
        public Project(Guid id, string title, DateTime createdAt, string createdBy, DateTime updatedAt, string updatedBy, DateTime deliveryData, List<Member> member)
        {
            Id = id;
            Title = title;
            CreatedAt = createdAt;
            CreatedBy = createdBy;
            UpdatedAt = updatedAt;
            UpdatedBy = updatedBy;
            DeliveryData = deliveryData;
            Member = member;
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
        public DateTime DeliveryData { get; set; }
        public List<Member> Member { get; set; }
    }
}