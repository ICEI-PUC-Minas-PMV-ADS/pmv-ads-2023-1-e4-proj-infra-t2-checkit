using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using ProjectManager.Controllers.Requests;
using System.ComponentModel.DataAnnotations;
using Tasks.Models;


namespace ProjectManager.Models
{
    public class Project:LinksHATEOS
    {
        public Project(RegisterOrUpdateProjectRequest request)
        {
            Title = request.Title!;
            CreatedAt = DateTime.Now;
            CreatedBy = request.CreatedBy!;
            UpdatedAt = DateTime.Now;
            UpdatedBy = request.UpdatedBy!;
            DueDate = request.DueDate!.Value;
            Members = request.Member!;
            Status = request.Status!;
        }

        public Project(string id, string title, DateTime createdAt, string createdBy, DateTime updatedAt, string updatedBy, DateTime dueDate, List<Member> members, string status)
        {
            Id = id;
            Title = title;
            CreatedAt = createdAt;
            CreatedBy = createdBy;
            UpdatedAt = updatedAt;
            UpdatedBy = updatedBy;
            DueDate = dueDate;
            Members = members;
            Status = status;
        }

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [Key]
        public string? Id { get; set; }
        [Required]
        public string Title { get; set; }
        public DateTime CreatedAt { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        public DateTime UpdatedAt { get; set; }
        public string UpdatedBy { get; set; }
        public string Status { get; set; }
        public DateTime DueDate { get; set; }
        public List<Member> Members { get; set; }
        [BsonRepresentation(BsonType.ObjectId)]
        public List<string> Tarefas { get; set; }


        public List<Tarefa>ListaTarefa { get; set; }
    }

    public enum StatusProject
    {
        Pendente,
        EmAndamento,
        Completo
    }
}