using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using RecruitXBackend.Data;
using System.IdentityModel.Tokens.Jwt; // Corectat de la "Set"
using System.Security.Claims;
using System.Text;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<RecruitXContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("RecruitXConnectionString")));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAuthorization();

// Adaug? IConfiguration
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});
// ...

//builder.Services.AddIdentityApiEndpoints<Users>().AddEntityFrameworkStores<RecruitXContext>();

//builder.Services.AddIdentityCore<Users>(options =>
//{

//}).AddEntityFrameworkStores<RecruitXContext>();
var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
//app.UseSwagger();
//app.UseSwaggerUI();
app.UseCors("AllowAll");

app.Run();
