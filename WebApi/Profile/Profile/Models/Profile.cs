using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Profiles.Models
{
    public class Profile
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        // public string UserId { get; set; } = null;

      //  public string Description { get; set; }
        public string Extension { get; set; }
        public int Length { get; set; }
        public byte[] Picture { get; set; }
        public string ContentType { get; set; }

       // public IFormFile Image { get; set; }
    }
}
