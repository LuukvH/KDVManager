/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * KDVManager CRM API
 * OpenAPI spec version: v1
 */
import type { Schedule } from "./schedule";

export type AddScheduleItemCommand = {
  childId?: string;
  /** @nullable */
  endDate?: string | null;
  groupId?: string;
  /** @nullable */
  schedules?: Schedule[] | null;
  startDate?: string;
};