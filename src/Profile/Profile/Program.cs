using Profiles.Models;
using Profiles.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Database Configuration
builder.Services.Configure<ProfileDatabaseSettings>(
    builder.Configuration.GetSection("ProfilesCheckitDatabase"));

builder.Services.AddSingleton<ProfilesServices>();

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
