namespace Tasks.Models;

public class Tarefa
{
    public string Id { get; set; }

    public string TituloTarefa { get; set; }

//False não foi concluída, true foi concluída

     public bool Status { get; set;}

    //public string Descricao { get; set; }

    //public Datetime DataInicio { get; set; }
    //public DateTime DataVencimento { get; set; }

    //// Define um nível quantitativo de Prioridade para posteriro comparação,inicialmente será de 1 a 3
    //public int Prioridade { get; set; }

    //public enum StatusTarefa
    //{
    //    Pendente,
    //    EmAndamento,
    //    Completa
    //}

}
