-- CreateIndex
CREATE INDEX "Booking_id_idx" ON "Booking"("id");

-- CreateIndex
CREATE INDEX "Education_id_idx" ON "Education"("id");

-- CreateIndex
CREATE INDEX "Education_mentorProfileId_idx" ON "Education"("mentorProfileId");

-- CreateIndex
CREATE INDEX "Field_id_idx" ON "Field"("id");

-- CreateIndex
CREATE INDEX "FieldTags_id_idx" ON "FieldTags"("id");

-- CreateIndex
CREATE INDEX "LiveSession_id_idx" ON "LiveSession"("id");

-- CreateIndex
CREATE INDEX "LiveSessionNotify_id_idx" ON "LiveSessionNotify"("id");

-- CreateIndex
CREATE INDEX "LiveSessionNotify_userId_idx" ON "LiveSessionNotify"("userId");

-- CreateIndex
CREATE INDEX "LiveSessionNotify_liveSessionId_idx" ON "LiveSessionNotify"("liveSessionId");

-- CreateIndex
CREATE INDEX "Meeting_id_idx" ON "Meeting"("id");

-- CreateIndex
CREATE INDEX "MentorApplications_id_idx" ON "MentorApplications"("id");

-- CreateIndex
CREATE INDEX "MentorProfile_visible_id_userId_idx" ON "MentorProfile"("visible", "id", "userId");

-- CreateIndex
CREATE INDEX "MentorProfile_id_idx" ON "MentorProfile"("id");

-- CreateIndex
CREATE INDEX "MentorProfile_visible_idx" ON "MentorProfile"("visible");

-- CreateIndex
CREATE INDEX "Price_id_idx" ON "Price"("id");

-- CreateIndex
CREATE INDEX "Request_id_idx" ON "Request"("id");

-- CreateIndex
CREATE INDEX "Reviews_id_idx" ON "Reviews"("id");

-- CreateIndex
CREATE INDEX "Reviews_mentorProfileId_idx" ON "Reviews"("mentorProfileId");

-- CreateIndex
CREATE INDEX "Reviews_userId_idx" ON "Reviews"("userId");

-- CreateIndex
CREATE INDEX "Schedule_id_idx" ON "Schedule"("id");

-- CreateIndex
CREATE INDEX "User_role_id_idx" ON "User"("role", "id");
