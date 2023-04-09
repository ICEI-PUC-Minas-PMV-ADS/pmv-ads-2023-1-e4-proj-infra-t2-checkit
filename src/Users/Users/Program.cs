using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json.Serialization;
using Users.Models;
using Users.Services;

var builder = WebApplication.CreateBuilder(args);

// No returned password in response
builder.Services.AddControllers()     
     .AddJsonOptions(j => j.JsonSerializerOptions.ReferenceHandler =
     ReferenceHandler.IgnoreCycles);

// Database Configuration
builder.Services.Configure<UserDatabaseSettings>(
    builder.Configuration.GetSection("UsersCheckitDatabase"));

builder.Services.AddSingleton<UserService>();

// Authentication 
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})
   // Add Jwt Beares
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

// Swager
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

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
