using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Users.Models
{
    [NotMapped]
    public class UserDto
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]        
        public string Password { get; set; }
        [Required]
        public Role Role { get; set; }
    }
}
