class ProgramaInternacional < ApplicationRecord
    belongs_to :pai
    has_and_belongs_to_many :institucion
    has_many :estudiantes
    belongs_to :pai
end
