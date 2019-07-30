package com.exadel.ehitchhiking.utils;

import org.springframework.data.geo.Point;

import javax.persistence.criteria.CriteriaBuilder;
import java.time.Instant;
import java.time.temporal.ChronoUnit;

public final class ComareUtils {
    private ComareUtils() {}

    public static double distance(Point a, Point b) {
        double dX = a.getX() - b.getX();
        double dY = a.getY() - b.getY();
        return Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
    }

    public static boolean isTimeInRange(Instant rangeStart, Instant rangeEnd, Instant time) {
        return ComareUtils.isTimeInRange(rangeStart, rangeEnd, time, 1);
    }

    public static boolean isTimeInRange(Instant rangeStart, Instant rangeEnd, Instant time, int hourTollerance) {
        return rangeStart.minus(hourTollerance, ChronoUnit.HOURS).isBefore(time) &&
                rangeEnd.plus(hourTollerance, ChronoUnit.HOURS).isAfter(time);
    }
}
