from azure.cosmosdb.table.models import Entity, EntityProperty

class Datum:
	def __init__(self, other):
		self.PartitionKey = other.PartitionKey if hasattr(other, 'PartitionKey') else ''
		self.RowKey = other.RowKey if hasattr(other, 'RowKey') else ''

		self.blobName = other['blobName']

		if isinstance(other, Entity):
			self.contrast = other.contrast.value if isinstance(other.contrast, EntityProperty) else other.contrast
			self.brightness = other.brightness.value if isinstance(other.brightness, EntityProperty) else other.brightness
			self.saturation = other.saturation.value if isinstance(other.saturation, EntityProperty) else other.saturation
			self.temperature = other.temperature.value if isinstance(other.temperature, EntityProperty) else other.temperature
		else:
			self.contrast = other['contrast']
			self.brightness = other['brightness']
			self.saturation = other['saturation']
			self.temperature = other['temperature']
