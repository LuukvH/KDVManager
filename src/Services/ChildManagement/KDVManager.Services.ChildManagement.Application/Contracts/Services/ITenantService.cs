﻿using System;
namespace KDVManager.Services.ChildManagement.Application.Contracts.Services
{
    public interface ITenantService
    {
        Guid TenantId { get; }
    }
}