using Tasks.Models;
using Tasks.Services;


var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<TarefasDatabaseSettings>(
    builder.Configuration.GetSection("TarefasCheckitDatabase"));

builder.Services.AddSingleton<TarefasService>();

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
