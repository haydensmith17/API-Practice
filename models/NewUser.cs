using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace apiPractice.models
{
    public partial class NewUser : DbContext
    {
        public NewUser(DbContextOptions<NewUser> options) : base(options)
        {
        }

        public virtual DbSet<UserPersons> User { get; set; }
        public virtual DbSet<BoardInfo> Board { get; set; }
        public virtual DbSet<Cart> Cart { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserPersons>(entity =>
            {

                entity.HasKey(e => e.Personid).HasName("newuser1_pkey");
                entity.ToTable("newuser1");
                entity.Property(e => e.Personid).HasColumnName("personid");
                entity.Property(e => e.Firstname)
                    .HasMaxLength(255)
                    .HasColumnName("firstname");
                entity.Property(e => e.Lastname)
                    .HasMaxLength(255)
                    .HasColumnName("lastname");
                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .HasColumnName("address");
                entity.Property(e => e.City)
                    .HasMaxLength(255)
                    .HasColumnName("city");
                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");
                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");
            });
            modelBuilder.Entity<BoardInfo>(entity =>
           {
               entity.HasKey(e => e.Id).HasName("newboard_pkey");
               entity.ToTable("newboard");
               entity.Property(e => e.Id)
                   .HasColumnName("id");
               entity.Property(e => e.Name)
                   .HasMaxLength(255)
                   .HasColumnName("name");
               entity.Property(e => e.Price)
                   .HasMaxLength(255)
                   .HasColumnName("price");
               entity.Property(e => e.Size)
                   .HasMaxLength(255)
                   .HasColumnName("size");
               entity.Property(e => e.Description)
                   .HasMaxLength(1500)
                   .HasColumnName("description");
               entity.Property(e => e.Image)
                   .HasMaxLength(1500)
                   .HasColumnName("image");
               entity.Property(e => e.CreatedOn)
                   .HasColumnType("timestamp without time zone")
                   .HasColumnName("created on");
               entity.Property(e => e.UpdatedOn)
                   .HasColumnType("timestamp without time zone")
                   .HasColumnName("updated on");
               entity.Property(e => e.Manufacturer)
                   .HasMaxLength(255)
                   .HasColumnName("manufacturer");
           });
            modelBuilder.Entity<Cart>(entity =>
       {
           entity.HasKey(e => e.CartID).HasName("cart_pkey");

           entity.ToTable("cart");

           entity.Property(e => e.CartID).HasColumnName("cartid");
           entity.Property(e => e.Personid).HasColumnName("personid");
           entity.Property(e => e.Id).HasColumnName("id");

           entity.HasOne(d => d.UserPersons)
               .WithMany(p => p.Carts)
               .HasForeignKey(d => d.Personid)
               .HasConstraintName("cart_personid_pkey");

           entity.HasOne(d => d.BoardInfo)
               .WithMany(p => p.Carts)
               .HasForeignKey(d => d.Id)
               .HasConstraintName("cart_id_pkey");

           entity.Property(e => e.CreatedOn)
               .HasColumnType("timestamp without time zone")
               .HasColumnName("createdon");
           entity.Property(e => e.UpdatedOn)
               .HasColumnType("timestamp without time zone")
               .HasColumnName("updatedon");

       });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }

}
