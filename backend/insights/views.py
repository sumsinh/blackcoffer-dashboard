from django.http import JsonResponse
from .mongo_connection import insights_collection


def get_all_insights(request):

    insights_cursor = insights_collection.find(
        {},
        {"_id": 0}
    )

    insights_data = []

    for item in insights_cursor:

        cleaned_item = {}

        for key, value in item.items():

            cleaned_item[key] = (
                value if value is not None else ""
            )

        insights_data.append(cleaned_item)

    return JsonResponse(
        insights_data,
        safe=False
    )


def get_filter_options(request):

    filters = {

        "countries": insights_collection.distinct(
            "country"
        ),

        "topics": insights_collection.distinct(
            "topic"
        ),

        "regions": insights_collection.distinct(
            "region"
        ),

        "sectors": insights_collection.distinct(
            "sector"
        ),

        "pestles": insights_collection.distinct(
            "pestle"
        ),

        "sources": insights_collection.distinct(
            "source"
        ),

        "cities": insights_collection.distinct(
            "city"
        ),

        "endYears": [
    str(year).strip()
    for year in insights_collection.distinct("end_year")
    if year not in ["", None]
],
    }

    cleaned_filters = {}

    for key, value in filters.items():

        cleaned_filters[key] = sorted(
            list(
                set(
                    [
                        str(item).strip()
                        for item in value
                        if item not in ["", None, " "]
                        and str(item).strip()
                    ]
                )
            )
        )

    return JsonResponse(cleaned_filters)