namespace Tasks.Models;


public class Task
{

    public string? Id { get; set; }


    public string TituloTarefa { get; set; }

    public string Descricao { get; set; }

    public DateTime DataInicio { get; set; }

    public DateTime DataVencimento { get; set; }

    public int Prioridade { get; set; }
    public enum StatusTarefa
    {
        Pendente,
        EmAndamento,
        Completa
    }

}
