using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Users.Models
{
    [NotMapped]
    public class AuthenticateDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
