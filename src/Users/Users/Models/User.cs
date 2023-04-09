using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Users.Models
{    
    public class User
    {
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