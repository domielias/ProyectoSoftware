class ProgramaInternacional < ApplicationRecord
    belongs_to :pai
    belongs_to :institucion
    has_many :student
end
