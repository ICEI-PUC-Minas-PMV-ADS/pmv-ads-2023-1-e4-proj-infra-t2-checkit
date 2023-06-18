using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json.Serialization;
using Tasks.Models;
using Tasks.Services;


var builder = WebApplication.CreateBuilder(args);


builder.Services.Configure<TarefasDatabaseSettings>(
    builder.Configuration.GetSection("TarefasCheckitDatabase"));

builder.Services.AddSingleton<TarefasService>();

builder.Services.AddControllers();

// Authentication 
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})   // Add Jwt Beares
   .AddJwtBearer(options =>
   {
       options.SaveToken = true;
       options.RequireHttpsMetadata = false;
       options.TokenValidationParameters = new TokenValidationParameters
       {
           ValidateIssuer = false,
           ValidateAudience = false,
           IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("F9KZHQ#Yav3DN430vA8m6^7G1Jn*f*M^"))
       };
   });

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Railway
var portVar = Environment.GetEnvironmentVariable("PORT");
if (portVar is { Length: > 0 } && int.TryParse(portVar, out int port))
{
    builder.WebHost.ConfigureKestrel(options => { options.ListenAnyIP(port); });
}

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();


app.UseHttpsRedirection();

app.MapControllers();

//app.UseCors(option => option.AllowAnyOrigin().AllowAnyMethod());

app.UseAuthentication();
app.UseAuthorization();

app.Run();
