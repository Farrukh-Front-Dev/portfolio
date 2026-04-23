import { NextResponse, type NextRequest } from "next/server";
import { logger } from "@lib/logger";
import { HTTP_STATUS } from "@lib/constants";
import type { ApiResponse, VisitorData } from "@types";

export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await req.json() as VisitorData;

    const { visitorId, name, type, page, screen } = body;

    // Validate required fields
    if (!visitorId || !type || !page) {
      return NextResponse.json(
        {
          status: "error",
          message: "Missing required fields",
        },
        { status: HTTP_STATUS.BAD_REQUEST }
      );
    }

    logger.info("Visitor tracked", {
      visitorId,
      name: name || "Anonymous",
      type,
      page,
      screen,
    });

    // Here you could store visitor data in a database
    // For now, we just log it

    return NextResponse.json(
      {
        status: "success",
        message: "Visitor tracked",
      },
      { status: HTTP_STATUS.OK }
    );
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    logger.error("Visit API error", errorMessage);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to track visitor",
      },
      { status: HTTP_STATUS.SERVER_ERROR }
    );
  }
}
