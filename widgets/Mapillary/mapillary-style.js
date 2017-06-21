{
    "version": 8,
    "sources": {
        "mapillary-source": {
            "tiles": [
                "http://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt"
            ],
            "type": "vector",
            "minzoom": 0,
            "maxzoom": 18
        }
    },
    "layers": [
        {
            "id": "mapillary-lines",
            "type": "line",
            "source": "mapillary-source",
            "source-layer": "mapillary-sequences",
            "minzoom": 6,
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#39AF64",
                "line-width": 2
            }
        },
        {
            "id": "mapillary-overview",
            "type": "symbol",
            "source": "mapillary-source",
            "source-layer": "mapillary-sequence-overview",
            "maxzoom": 6,
            "layout": {
                "icon-image": "Road/Rectangle green yellow (Alt)/2",
                "icon-allow-overlap": true,
                "symbol-avoid-edges": true
            }
        },
        {
            "id": "mapillary-dots",
            "type": "symbol",
            "source": "mapillary-source",
            "source-layer": "mapillary-images",
            "minzoom": 14,
            "layout": {
                "icon-image": "Road/Rectangle green yellow (Alt)/2",
                "icon-allow-overlap": true,
                "symbol-avoid-edges": true
            }
        }
    ]
}