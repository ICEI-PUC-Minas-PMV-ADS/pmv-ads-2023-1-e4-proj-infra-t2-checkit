using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Users.Models
{
    [Table("Users")]
    public class User
    {
        [Key]
        public int Id { get; set; }
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
        [Display(Name = "User")]
        User,
        [Display(Name = "Manager")]
        Manager
    }
}