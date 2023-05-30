using Profiles.Models;
using Profiles.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Database Configuration
builder.Services.Configure<ProfileDatabaseSettings>(
    builder.Configuration.GetSection("ProfilesCheckitDatabase"));

// Railway
var portVar = Environment.GetEnvironmentVariable("PORT");
if (portVar is { Length: > 0} && int.TryParse(portVar, out int port))
{
    builder.WebHost.ConfigureKestrel(options => { options.ListenAnyIP(port); });
}

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

app.UseAuthorization();

app.MapControllers();

app.Run();
