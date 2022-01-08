﻿using System;
using KDVManager.Services.ChildManagement.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace KDVManager.Services.Scheduling.Persistence.Configurations
{
    public class GroupConfiguration : IEntityTypeConfiguration<Child>
    {
        public GroupConfiguration()
        {
        }

        public void Configure(EntityTypeBuilder<Child> builder)
        {
            builder.Property(e => e.FamilyName)
                .IsRequired();

            builder.Property(e => e.TenantId)
                .IsRequired();
        }
    }
}