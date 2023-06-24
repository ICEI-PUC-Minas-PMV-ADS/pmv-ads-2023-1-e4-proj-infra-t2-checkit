using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using ProjectManager.Controllers.Requests;
using System.ComponentModel.DataAnnotations;


namespace ProjectManager.Models
{
    public class Project
    {
        public Project(RegisterOrUpdateProjectRequest request, in string id = null)
        {
            Id = id;
            Title = request.Title!;
            CreatedAt = DateTime.Now;            
            UpdatedAt = DateTime.Now;           
            DueDate = request.DueDate!.Value;  
        
            Status = request.Status!;
            TarefaId = request.TarefaId!;
            UserId = request.UserId!;
        }

        public Project(string id, string title, DateTime createdAt, DateTime updatedAt, DateTime dueDate, string status, List<string?> tarefaId, string userId)
        {
            Id = id;
            Title = title;
            CreatedAt = createdAt;            
            UpdatedAt = updatedAt;            
            DueDate = dueDate;       
            Status = status;
            TarefaId = tarefaId;
            UserId = userId;
            
        }
           

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [Key]
        public string Id { get; set; }
        [Required]
        public string Title { get; set; }
        public DateTime CreatedAt { get; set; }
        [Required]        
        public DateTime UpdatedAt { get; set; }        
        public string? Status { get; set; }
        public DateTime DueDate { get; set; }
        public List<string?> TarefaId { get; set; }
        public string UserId { get; set; }
    }

    public enum StatusProject
    {
        Pendente,
        EmAndamento,
        Completo
    }
}