import json
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "src" / "data" / "portfolio.json"
OUTPUT_PATH = ROOT / "public" / "CV_Heritier.pdf"


def load_data():
    with DATA_PATH.open(encoding="utf-8") as file:
        return json.load(file)


def section_title(text, styles):
    return Paragraph(text.upper(), styles["Section"])


def chips(items, styles):
    return Paragraph("  |  ".join(items), styles["Small"])


def add_bullets(story, items, styles):
    for item in items:
        story.append(Paragraph(f"- {item}", styles["ResumeBullet"]))


def build_resume():
    data = load_data()
    profile = data["profile"]

    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="Name",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=24,
            leading=28,
            textColor=colors.HexColor("#111111"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Headline",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=14,
            textColor=colors.HexColor("#9a5a06"),
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Contact",
            parent=styles["Normal"],
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor("#444444"),
            spaceAfter=12,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Section",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12,
            textColor=colors.HexColor("#111111"),
            borderColor=colors.HexColor("#9a5a06"),
            borderWidth=0,
            borderPadding=0,
            spaceBefore=8,
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Role",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.5,
            leading=12,
            textColor=colors.HexColor("#222222"),
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Meta",
            parent=styles["Normal"],
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor("#666666"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Body",
            parent=styles["Normal"],
            fontSize=8.8,
            leading=11.5,
            textColor=colors.HexColor("#333333"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeBullet",
            parent=styles["Body"],
            leftIndent=10,
            firstLineIndent=-6,
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Small",
            parent=styles["Normal"],
            fontSize=8,
            leading=10,
            textColor=colors.HexColor("#444444"),
            spaceAfter=4,
        )
    )

    doc = BaseDocTemplate(
        str(OUTPUT_PATH),
        pagesize=A4,
        leftMargin=0.55 * inch,
        rightMargin=0.55 * inch,
        topMargin=0.45 * inch,
        bottomMargin=0.45 * inch,
        title=f"{profile['name']} Resume",
        author=profile["name"],
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates([PageTemplate(id="resume", frames=[frame])])

    story = [
        Paragraph(profile["name"], styles["Name"]),
        Paragraph(data["resume"]["headline"], styles["Headline"]),
        Paragraph(
            f"{profile['location']} | {profile['email']} | {profile['phoneDisplay']} | "
            f"LinkedIn: linkedin.com/in/ndanga-heritier | GitHub: github.com/NdangaHeritier",
            styles["Contact"],
        ),
        section_title("Profile", styles),
        Paragraph(data["resume"]["summary"], styles["Body"]),
    ]

    story.append(section_title("Experience", styles))
    for item in data["experience"]:
        story.append(Paragraph(f"{item['role']} - {item['company']}", styles["Role"]))
        story.append(Paragraph(f"{item['period']} | {item['location']}", styles["Meta"]))
        story.append(Paragraph(item["summary"], styles["Body"]))
        add_bullets(story, item["responsibilities"], styles)
        story.append(chips(item["tags"], styles))

    story.append(section_title("Selected Projects", styles))
    for project in data["projects"]:
        story.append(Paragraph(project["title"], styles["Role"]))
        story.append(Paragraph(f"{project['role']} | {project['year']}", styles["Meta"]))
        story.append(Paragraph(project["description"], styles["Body"]))
        story.append(chips(project["technologies"], styles))

    story.append(section_title("Education", styles))
    for item in data["education"]:
        story.append(Paragraph(item["program"], styles["Role"]))
        meta = f"{item['institution']} | {item['period']} | {item['location']}"
        if item.get("expectedGraduation"):
            meta += f" | Expected Graduation: {item['expectedGraduation']}"
        story.append(Paragraph(meta, styles["Meta"]))
        story.append(Paragraph(item["description"], styles["Body"]))

    story.append(section_title("Skills", styles))
    skill_rows = []
    for group in data["skills"]:
        skill_rows.append(
            [
                Paragraph(f"<b>{group['category']}</b>", styles["Small"]),
                Paragraph(", ".join(group["items"]), styles["Small"]),
            ]
        )
    table = Table(skill_rows, colWidths=[1.35 * inch, 5.2 * inch], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                ("TEXTCOLOR", (0, 0), (0, -1), colors.HexColor("#111111")),
            ]
        )
    )
    story.append(table)
    story.append(Spacer(1, 0.1 * inch))

    doc.build(story)


if __name__ == "__main__":
    build_resume()
