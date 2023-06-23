namespace Tasks.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Tarefa : LinksHATEOS
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    //public string ProjectId { get; set; }

    public string TituloTarefa { get; set; }
    //public string Descricao { get; set; }

    //public DateTime DataInicio { get; set; }
    //public DateTime DataVencimento { get; set; }

    public string Status { get;set; }

    ////Define um nível quantitativo de Prioridade para posteriro comparação,inicialmente será de 1 a 3
    //public int Prioridade { get; set; }     

    //public enum StatusTarefa
    //{
    //    Pendente,
    //    EmAndamento,
    //    Completa
    //}

}
