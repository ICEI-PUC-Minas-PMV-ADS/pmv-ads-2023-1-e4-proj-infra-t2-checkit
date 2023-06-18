using Profiles.Models;
using Profiles.Services;

var builder = WebApplication.CreateBuilder(args);


// Database Configuration
builder.Services.Configure<ProfileDatabaseSettings>(
    builder.Configuration.GetSection("ProfilesCheckitDatabase"));

// Railway
var portVar = Environment.GetEnvironmentVariable("PORT");
if (portVar is { Length: > 0} && int.TryParse(portVar, out int port))
{
    builder.WebHost.ConfigureKestrel(options => { options.ListenAnyIP(port); });
}

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<ProfilesServices>();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

app.UseAuthorization();

app.MapControllers();

app.Run();
