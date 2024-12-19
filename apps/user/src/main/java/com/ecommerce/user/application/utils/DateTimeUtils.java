package com.ecommerce.user.application.utils;

import com.ecommerce.user.application.exeption.BadRequestException;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

@Slf4j
public class DateTimeUtils {

    private static final DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE;

    public static String fromLocalDateToString(LocalDate date) {
        return date.format(formatter);
    }

    public static LocalDate fromStringToLocalDate(String dateString) throws DateTimeParseException {
        try {
            return LocalDate.parse(dateString, formatter);
        } catch (DateTimeParseException exception) {
            log.error("Cannot parse date");
            throw exception;
        }
    }
}
