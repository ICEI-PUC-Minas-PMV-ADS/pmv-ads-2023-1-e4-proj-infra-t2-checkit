using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver.Core.WireProtocol.Messages;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Tasks;
using Tasks.Models;

namespace Users.Models
{    
    public class User
    {
        Tarefa T1 = new Tarefa();
       
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        [JsonIgnore]     // Não retorna password na response
        public string Password { get; set; }
        [Required]
        public Role Role { get; set; }

  
    }

    public enum Role
    {
        [Display(Name = "Admin")]
        Admin,
        [Display(Name = "User")]
        User,        
    }
}