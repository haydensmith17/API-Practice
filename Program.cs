using System.Text.Json.Serialization;
using apiPractice.Interface;
using apiPractice.models;
using apiPractice.services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<NewUser>(options =>
{
    options.UseNpgsql("Server=localhost;Port=5432;Database=root;User Id=root;Password=secret;");
});

builder.Services.AddCors(opt=>
{
opt.AddPolicy("CorsPolicy",policy =>
{
policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3001");
});
});
// Add services to the container.
builder.Services.AddControllers();
// builder.Services.AddTransient<Stuff>();
builder.Services.AddTransient<CardService>();
builder.Services.AddTransient<UserService>();
builder.Services.AddTransient<BoardService>();
builder.Services.AddTransient<CartService>();
builder.Services.AddTransient<AddressService>();
builder.Services.AddTransient<AccessoryService>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers().AddJsonOptions(config =>
{
   config.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
    config.JsonSerializerOptions.AllowTrailingCommas = true;
    config.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("CorsPolicy");
app.UseRouting();
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();