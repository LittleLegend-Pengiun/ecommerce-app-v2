package com.ecommerce.product.application.utils.mapper;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class DatetimeMapper {
    public static String formatReleaseDate(ZonedDateTime zdt) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        LocalDateTime ldt = zdt.toLocalDateTime();
        return ldt.format(formatter);
    }


    public static ZonedDateTime parseReleaseDate(String dateString) {
        dateString = dateString.replaceAll("/","-");
        String [] dateParts = dateString.split("-");
        String day = dateParts[0];
        String month = dateParts[1];
        String year = dateParts[2];
        return ZonedDateTime.of(Integer.parseInt(year), Integer.parseInt(month), Integer.parseInt(day), 0, 0, 0, 0, ZoneId.of("Asia/Ho_Chi_Minh"));
    }
}
