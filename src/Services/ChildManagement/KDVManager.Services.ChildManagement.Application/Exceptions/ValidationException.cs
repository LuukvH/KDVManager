﻿using System;
using System.Collections.Generic;
using FluentValidation.Results;
using KDVManager.Services.ChildManagement.Application.Contracts.Validation;

namespace KDVManager.Services.ChildManagement.Application.Exceptions
{
    public class ValidationException : ApplicationException
    {
        public List<ValidationError> ValidationErrors { get; set; } = new List<ValidationError>();

        public ValidationException(ValidationResult validationResult)
        {
            foreach (var validationError in validationResult.Errors)
            {
                ValidationErrors.Add(new ValidationError()
                {
                    Code = validationError.ErrorCode,

                    Title = validationError.ErrorMessage,

                    Property = validationError.PropertyName

                }); ;
            }
        }
    }
}
