using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Task_ProjectHistory.Models
{
    public class Historic
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string TituloTarefa { get; set; }
        public string TituloProjeto { get; set; }

        public DateTime DataConclusao { get; set; }

    }
}
